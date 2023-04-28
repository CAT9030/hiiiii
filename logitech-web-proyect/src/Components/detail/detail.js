class detailComponent extends HTMLElement{
    constructor (){
        super();
        this.name = this.getAttribute('name');
    }

    connectedCallback(){
        this.render();
    }

    static get observedAttributes(){
        return ['name']
    }
    
    attributeChangedCallback(propName, oldvalue, newValue){
        this[propName] = newValue;
        this.render();
        
    }

    render(){
        this.innerHTML = `
            <option value="${this.name}">${this.name}</option>
            <!-- <article class="product">
                <div class = "product-info">
                    <h3 class ="product-name">${this.name}</h3>

                </div>
            </article> -->
        `
    }


    // render() {
        
    //     this.innerHTML = `
    //     <link rel="stylesheet" href="/src/Components/detail/styles.css">    
    //     <div class="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
    //     <label for="filters"></label>
    //     <select name="filters" id="filters">
    //         <option value="free">Free</option>
    //         <option value="bronze">Bronze</option>
    //         <option value="silver" selected>Silver</option>
    //         <option value="gold">Gold</option>
    //     </select>
    //     </div>
    //     `
    // }

}



customElements.define('detail-component', detailComponent);
export default detailComponent;