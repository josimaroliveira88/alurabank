class NegociacaoController {
    private inputData: Element;
    private inputQuantidade: Element;
    private inputValor: Element;

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona(event: Event) {

        event.preventDefault();

        const negociacao = new Negociacao(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        )

        console.log(negociacao.quantidade + 20);

    }
}