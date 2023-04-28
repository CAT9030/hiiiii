class detailElement extends HTMLElement {
    constructor (){
        super();
        this.name = this.getAttribute('name');
        this.description = this.getAttribute('description');
        this.price = this.getAttribute('price');
        this.image = this.getAttribute('image');
        this.type = this.getAttribute('type');
    }

    connectedCallback(){
        this.render();
    }

    static get observedAttributes(){
        return ['name', 'description', 'image', 'price','type']
    }

    attributeChangedCallback(propName, oldvalue, newValue){
        this[propName] = newValue;
        this.render();

    }

    render(){
        this.innerHTML = `
        <link rel="stylesheet" href="/src/Components/detailElement/style.css">
            <article class="product">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-7">
                    <img class= "product-img" src= ${this.image} alt="">
                    </div>
                    <div class="cont-arti col-md-5 align-items-center">
                    <h5 class="product-type">${this.type}</h5>
                    <div class = "product-info">
                    <h3 class ="product-name">${this.name}</h4>
                    <div class="product-description">
                        <p>${this.description}</p>
                    </div>
                    <h4>${this.price}</h4>
                </div>
                <button type="button" id="buy-btn" class="btn-primary button" href="/${this.name}"">ADD TO CART</button>
                    </div>
                </div>
             </div>
            </article>
        `
    }
}

customElements.define('detail-element', detailElement);
export default detailElement;