import React, { useState } from "react";
//Creamos espacio de estado global
const ContextoTema = React.createContext();

//Componente proveedor del estado
//Carga primero el proveedor
const ProveedorTema = ({ children }) => {
  const [tema, cambiarTema] = useState({
    alineado: "center",
    fuente: 20
  });
  const aumentarFuente = () => {
    cambiarTema({ ...tema, fuente: tema.fuente + 1 });
  };
  const disminuirFuente = () => {
    cambiarTema({ ...tema, fuente: tema.fuente - 1 });
  };
  const alinearDerecha = () => {
    cambiarTema({ ...tema, alineado: "right" });
  };
  const alinearIzquierda = () => {
    cambiarTema({ ...tema, alineado: "left" });
  };
  const alinearCentro = () => {
    cambiarTema({ ...tema, alineado: "center" });
  };
  return (
    <ContextoTema.Provider
      value={{
        propiedades: {
          posts: [
            { id: 1, post: "Post 1" },
            { id: 2, post: "Post 2" },
            { id: 3, post: "Post 3" }
          ],
          tema
        },
        funciones: {
          aumentarFuente,
          disminuirFuente,
          alinearDerecha,
          alinearIzquierda,
          alinearCentro
        }
      }}
    >
      {children}
    </ContextoTema.Provider>
  );
};
export { ContextoTema, ProveedorTema };
