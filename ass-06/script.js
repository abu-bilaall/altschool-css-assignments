// DOM shenanigans
const faqs = document.querySelector('.faqs');
const answerLine = document.querySelector('#answer-line');
const dropdown = document.querySelector('#dropdown');

const answer = document.createElement('div');
answer.setAttribute('class', 'answer');
answer.textContent = `URL shortening works by taking a long URL and creating a shorter, 
        condensed version that redirects to the original URL. When a user clicks on the shortened link, 
        they are redirected to the intended destination.`;

dropdown.addEventListener('click', () => {
    console.log('click');
    let tempAnswer = document.querySelector('.answer');
    if (tempAnswer) {
        faqs.removeChild(answer);
    } else {
        faqs.insertBefore(answer, answerLine);
    }
});

// auto-clicking..
let clickEvent = new MouseEvent('click');
dropdown.dispatchEvent(clickEvent);