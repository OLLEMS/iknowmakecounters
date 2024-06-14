function verificar() {
  let i = document.getElementById("Inicio").value;
  let f = document.getElementById("Fim").value;
  let p = document.getElementById("Passo").value;
  let res = document.getElementById("res");
  let loadtxt = document.getElementById("loader-text");
  let load = document.getElementById("load");
  let content = document.getElementById("content");

  if (i.length == 0 || f.length == 0 || p.length == 0) {
    window.alert("[ERRO] Dados insuficientes, verifique para prosseguir!");
  } else {
    res.innerHTML = "Contando:  ";

    i = parseInt(i);
    f = parseInt(f);
    p = parseInt(p);
    if (i < f) {
      //crescente
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` \u{1F782} ${c} `;
      }
    } else {
      //regressiva
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` \u{1F782} ${c} `;
      }
    }
    res.style.display = "flex";
    res.innerHTML += `\u{1F534}`;
    res.style.width = "auto ";
    res.style.height = "auto";
    res.style.position = "static";
    res.style.marginLeft = "auto";
    content.style.background = "linear-gradient(white, offwhite)";
  }
}
