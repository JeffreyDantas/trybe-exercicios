const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

const pai = elementoOndeVoceEsta.parentElement;

pai.style.color = 'red'

const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstChild;

primeiroFilhoDoFilho.innerText = 'primeiroFilhoDoFIlho';

const primeiroFilho = pai.firstElementChild;

