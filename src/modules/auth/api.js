import http from "@/api/http";

export default {
  login(username, password, rememberMe) {
    return http.post("/api/auth/login/", {
      username,
      password,
      remember_me: rememberMe
    });
  },
  logout() {
    return http.post("/api/auth/logout/", {});
  },
  getUser() {
    return http.get("/api/auth/user/");
  },
  cadastrar(username, email, first_name, last_name, password){
    return http.post("/api/acconts/cadastrar/", {
      username,
      email,
      first_name,
      last_name,
      password
    })
  },
  setHorario(user, hora_chegada, hora_saida){
    return http.post("/api/funcionario/", {
      user,
      hora_chegada,
      hora_saida
    })
  },
  getFuncionario(){
     return http.get("/api/funcionario/");
  },
};
