import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  useContext,
  createContext,
} from "react";

import PropTypes from "prop-types";

const ModalContext = createContext();

function Modal({ modal, i }) {
  const { setModals, states } = useContext(ModalContext);
  const [isTransformMinimize, setIsTransformMinimize] = useState(false);
  const { key, hookKey } = modal;

  const prevModalStateRef = useRef(null);
  const modalState = useMemo(() => {
    if (states[hookKey] !== prevModalStateRef.current) {
      prevModalStateRef.current = states[hookKey];
    }
    return states[hookKey];
  }, [states, hookKey]);

  const handleMaximizeModal = () => {
    setIsTransformMinimize(false);
  };

  const handleTransitionEnd = (e) => {
    if (Array.from(e.target.classList).includes("modal-minimize")) {
      setIsTransformMinimize(true);
      return;
    }
  };

  const closeModal = (key) => (e) => {
    e.stopPropagation();
    setModals((prev) => prev.filter((modal) => modal.key !== key));
  };

  useEffect(() => {
    if (!isTransformMinimize) {
      setModals((prev) =>
        prev.map((modal) =>
          modal.key === key ? { ...modal, status: "open" } : modal
        )
      );
    }
  }, [isTransformMinimize, key, setModals]);

  return (
    <>
      <div
        className={`border-l border-t border-r border-white mr-1 px-2 py-1 bg-primary-700
                    cursor-pointer rounded-tl-lg rounded-tr-lg flex items-center ${
                      isTransformMinimize ? "" : "invisible"
                    }`}
        onClick={handleMaximizeModal}
      >
        <p className="whitespace-nowrap text-sm text-white">{modal.title}</p>
        <button className="ml-2 cursor-pointer" onClick={closeModal(modal.key)}>
          <i className="fa fa-times text-white text-sm" />
        </button>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 modal-new transition-all duration-100 ease-linear ${
          modal?.status === "open" ? "" : "modal-minimize cursor-pointer"
        } ${isTransformMinimize ? "hidden" : ""}`}
        style={{
          zIndex: 9999,
          right: modal.status === "minimize" ? `${i * 78}px` : "0",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        <div onClick={(e) => e.stopPropagation()}>
          {typeof modal?.content === "function"
            ? modal?.content(modalState)
            : modal?.content}
        </div>
        {modal.status === "minimize" && (
          <div className="absolute w-full h-full" />
        )}
      </div>
    </>
  );
}

Modal.defaultProps = {
  modal: {
    hookKey: "",
    title: "",
  },
};

Modal.propTypes = {
  modal: PropTypes.shape({
    title: PropTypes.string,
    status: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    hookKey: PropTypes.string,
    content: PropTypes.instanceOf(Object).isRequired,
  }),
  i: PropTypes.number.isRequired,
};

export function ModalProvider({ children }) {
  const [modals, setModals] = useState([]);
  const [states, setStates] = useState({});

  return (
    <ModalContext.Provider value={{ setModals, modals, setStates, states }}>
      <div className="fixed bottom-0 right-0 max-w-full flex flex-row-reverse z-50 overflow-x-scroll">
        {modals.map((modal, i) => (
          <React.Fragment key={modal.key}>
            <Modal modal={modal} i={i} />
          </React.Fragment>
        ))}
      </div>
      {children}
    </ModalContext.Provider>
  );
}

ModalProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export function ModalCard({ title, children, onMinimize, onClose, size }) {
  const showHeader = useMemo(
    () => title || onClose || onMinimize,
    [title, onClose, onMinimize]
  );
  return (
    <div className={`modal-card ${size}`} style={{ height: "max-content" }}>
      {showHeader && (
        <header className="bg-white px-5 py-5 flex border-b rounded-t-lg">
          {title && <h2 className="text-black font-medium text-xl">{title}</h2>}
          <div className="ml-auto flex">
            {onMinimize && (
              <button onClick={onMinimize}>
                <i className="far fa-window-minimize text-black" />
              </button>
            )}
            {onClose && (
              <button className="ml-4" onClick={onClose}>
                <i className="fa fa-times text-black" />
              </button>
            )}
          </div>
        </header>
      )}
      {children}
    </div>
  );
}

ModalCard.defaultProps = {
  title: "",
  size: "md",
  onClose: null,
  onMinimize: null,
};

ModalCard.propTypes = {
  title: PropTypes.string,
  onMinimize: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.instanceOf(Object),
  ]),
  onClose: PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(Object)]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl"]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export const useCreateModal = (key = "modal", state = {}) => {
  const { setModals, setStates } = useContext(ModalContext);
  const prevStateRef = useRef(null);

  useEffect(() => {
    if (JSON.stringify(prevStateRef.current) === JSON.stringify(state)) return;
    prevStateRef.current = state;
    setStates((prev) => ({ ...prev, [key]: state }));
  }, [state, setStates, key]);

  const createModal = useCallback(
    ({ title = "Title", content = () => null }) => {
      const modalKey = `${key}-${Date.now()}`;
      const minimizeModal = () =>
        setModals((prev) =>
          prev.map((modal) => {
            return modal.key === modalKey
              ? {
                  ...modal,
                  status: "minimize",
                }
              : modal;
          })
        );

      const closeThisModal = () => {
        setModals((prev) => prev.filter((modal) => modal.key !== modalKey));
      };
      setModals((prev) => [
        ...prev,
        {
          key: modalKey,
          hookKey: key,
          title,
          status: "open",
          content: content(closeThisModal, minimizeModal),
        },
      ]);
    },
    [key, setModals]
  );
  return createModal;
};

export const useDestroyModal = () => {
  const { setModals, setStates } = useContext(ModalContext);

  const destroyModal = useCallback(() => {
    setModals([]);
    setStates({});
  }, [setModals, setStates]);

  return destroyModal;
};

export const useModal = (
  configs = {
    key: "default",
    title: "Modal",
  }
) => {
  const { setModals } = useContext(ModalContext);
  const title = configs.title || "Modal";

  const modal = (content = () => null) => {
    const key = `${configs.key || "default"}-${Date.now()}`;
    const minimizeModal = () =>
      setModals((prev) =>
        prev.map((modal) => {
          return modal.key === key
            ? {
                ...modal,
                status: "minimize",
              }
            : modal;
        })
      );

    const closeModal = () => {
      setModals((prev) => prev.filter((modal) => modal.key !== key));
    };
    setModals((prev) => [
      ...prev,
      {
        key,
        title,
        status: "open",
        content: content(closeModal, minimizeModal),
      },
    ]);
  };
  return modal;
};

// css
// .modal {
//   --spacing: 24px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: auto;
// }

// .modal__close {
//   display: block;
//   position: fixed;
//   background: rgba(255, 255, 255, 0.5);
//   border: none;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// }

// .modal__inner {
//   position: relative;
//   /* width: calc(var(--spacing) * 36); */
//   max-width: 100%;
//   padding: calc(var(--spacing) * 3) calc(var(--spacing) * 1.5);
//   border-radius: 5px;
//   border: 1px solid rgba(0, 0, 0, 0.1);
//   background-color: #ffffff;
//   box-shadow: rgba(9, 30, 66, 0.25) 0px 20px 32px -8px;
// }

// .modal__close-btn {
//   position: absolute;
//   top: var(--spacing);
//   right: var(--spacing);
//   padding: 0;
//   border: none;
//   cursor: pointer;
// }

// .modal__close-btn svg {
//   width: var(--spacing);
//   height: var(--spacing);
//   fill: currentColor;
//   opacity: 0.5;
// }

// .modal__close-btn:hover svg {
//   opacity: 1;
// }
// .smart-logo {
//   background-image: url('../img/SmartLogo.svg');
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
// }

// .modal {
//   --spacing: 24px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: auto;
// }
