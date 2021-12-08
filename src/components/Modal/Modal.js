import React, { useRef, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { Background, CloseModalButton, ModalWrapper } from "./ModalStyles";
import Form from "../Form/Form";

const Modal = ({ showModal, toggleModal }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      toggleModal();
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key && showModal) {
        toggleModal();
      }
    },
    [showModal, toggleModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);

    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const backgroundVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const modalVariants = {
    initial: {
      opacity: 0,
      y: 200,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 100,
      },
    },

    exit: {
      y: -200,
      opacity: 0,
    },
  };

  return (
    <AnimatePresence>
      {showModal && (
        <Background
          variants={backgroundVariants}
          animate="animate"
          initial="initial"
          onClick={closeModal}
          ref={modalRef}
          exit={{
            opacity: 0,
          }}
        >
          <ModalWrapper
            variants={modalVariants}
            animate="animate"
            initial="initial"
            exit={{
              opacity: 0,
              y: "-100vh",
            }}
          >
            <h2>Romantyzm</h2>
            <h3>(z fr. romantisme, od roman – powieść, opowieść)</h3>
            <p>
              Powstał jako reakcja na zmiany społeczne i polityczne wywołane
              rewolucją przemysłową i rewolucją francuską z 1789 roku. Był formą
              buntu przeciwko ustalonym regułom społecznym, które rządziły
              społeczeństwami epoki Oświecenia – przeciw sztywnym zasadom życia
              arystokracji i mieszczaństwa, ustalonym regułom życia politycznego
              oraz przeciw naukowemu podejściu do natury i człowieka. Naczelne
              hasło Rewolucji Francuskiej – „wolność, równość, braterstwo” stało
              się drogowskazem dla nowego kierunku myślenia, który
              zakwestionował podstawy oświeceniowego, racjonalistycznego
              pojmowania świata.
            </p>
            <p>
              Romantycy zwrócili uwagę na życie wewnętrzne człowieka –
              duchowość, uczucia, emocje, a również na odrębność jednostki
              ludzkiej, jej odmienność i indywidualność. Dominacja uczucia nad
              rozumem była także buntem przeciwko zastanej rzeczywistości i
              obowiązującym w niej normom społecznym. Metodą poznania świata
              stać się miał nie empiryzm, ale sztuka. Typowy romantyczny bohater
              literacki to buntownik motywowany wielkimi namiętnościami, takimi
              jak miłość lub nienawiść. Bohater ten charakteryzuje się
              nieprzeciętnością, konfliktowością; samotnie buntuje się przeciw
              normom społecznym lub walczy w obronie ojczyzny. Najważniejszym
              uczuciem dla romantyka jest miłość, przeważnie nieszczęśliwa i
              tragiczna, zawsze jednak wszechogarniająca i potężna.
            </p>
            <p>
              Z romantyzmem związane było także przeświadczenie o konieczności
              walki z tyranią, ze zniewoleniem człowieka, z uprzedzeniami
              społecznymi i rasowymi. Przeświadczenie to zaowocowało wieloma
              zrywami o charakterze rewolucyjnym lub narodowym, jakie miały
              miejsce niemal w całej Europie. Zrywy te to m.in. powstanie Greków
              przeciwko Turkom (1821), powstanie dekabrystów (1825) w Rosji,
              rewolucja lipcowa (1830) we Francji, powstanie listopadowe
              (1830–1831) w Polsce, Wiosna Ludów (1848–1849), która ogarnęła
              szereg europejskich krajów, powstanie styczniowe (1863–1864) w
              Polsce.
            </p>
            <p>
              <em>pl.wikipedia.org/wiki/Romantyzm</em>
            </p>
            {/* <Form></Form> */}
            <CloseModalButton aria-label="Close modal" onClick={toggleModal} />
          </ModalWrapper>
        </Background>
      )}
    </AnimatePresence>
  );
};

export default Modal;
