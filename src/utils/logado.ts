import secureLocalStorage from "react-secure-storage";

export default function logado() {
  if (secureLocalStorage.getItem("usuario")) {
    const objetoUsuario: any = secureLocalStorage.getItem("usuario");

    interface User {
      nome: string;
    }
    // APARECE O PRIMEIRO NOME
    const nome: User = objetoUsuario.user.nome.trim().split(" ")[0];

    return {
      logado: true,
      nome: nome,
    };
  } else {
    return {
      logado: false,
      nome: null,
    };
  }
}
