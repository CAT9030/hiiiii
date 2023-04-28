class CommentsComponent extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
      
        <div id="comments-container">
         
        </div>
      
        <div id="comments-list"></div>

        <form id="comment-form">
          <textarea id="comment-input" placeholder="Escribe aquí tu comentario"></textarea>
          <button type="submit">Enviar</button>
        </form>


        <div class="comment-container">
        <div class="comment">
          <div class="text">Excelente producto, lo recomiendo!</div>
        </div>
        <div class="comment">
          <div class="text">Me encantó, muy buena calidad.</div>
        </div>
        <div class="comment">
    
          <div class="text">El envío fue rápido y todo llegó en perfectas condiciones.</div>
        </div>
      </div>
      
      
      
      




      <script type="module">
        import css from './comments-component.css';
        
        const template = document.querySelector('#comments-template').content;
      
        class CommentsComponent extends HTMLElement {
          constructor() {
            super();
      
            const shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.appendChild(template.cloneNode(true));
      
            const commentForm = shadowRoot.querySelector('#comment-form');
            const commentInput = shadowRoot.querySelector('#comment-input');
            const commentsContainer = shadowRoot.querySelector('#comments-container');
      
            commentForm.addEventListener('submit', (event) => {
              event.preventDefault();
              const commentText = commentInput.value;
              if (commentText.trim() === '') {
                alert('Debes escribir un comentario');
                return;
              }
              const commentElement = document.createElement('div');
              commentElement.classList.add('comment');
              commentElement.textContent = commentText;
              commentsContainer.appendChild(commentElement);
              commentInput.value = '';
            });
      
            commentsContainer.addEventListener('click', (event) => {
              if (event.target.classList.contains('delete-comment')) {
                event.target.parentElement.remove();
              }
            });
          }
        }
      
        



        
        
        `;

        const commentsContainer = document.querySelector('#comments-container');
const commentForm = document.querySelector('#comment-form');
const commentInput = document.querySelector('#comment-input');

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const commentText = commentInput.value;
  if (commentText.trim() === '') {
    alert('Debes escribir un comentario');
    return;
  }
  const commentElement = document.createElement('div');
  commentElement.classList.add('comment');
  commentElement.textContent = commentText;
  commentsContainer.appendChild(commentElement);
  commentInput.value = '';
});

commentsContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-comment')) {
    event.target.parentElement.remove();
  }
}); 



/*intento de cata de hacerlo con json en fracaso xd

function loadComments() {
  fetch('comments.json')
    .then(response => response.json())
    .then(data => showComments(data.comments))
    .catch(error => console.error(error));
}

function showComments(comments) {
  const commentsList = document.getElementById('comments-list');
  commentsList.innerHTML = '';
  comments.forEach((comment) => {
    const commentEl = document.createElement('div');
    commentEl.classList.add('comment');
    commentEl.innerHTML = `
      <h3 class="comment-author">${comment.author}</h3>
      <p class="comment-text">${comment.text}</p>
    `;
    commentsList.appendChild(commentEl);
  });
}

*/
    }
}

customElements.define('comments-component', CommentsComponent);
export default CommentsComponent;