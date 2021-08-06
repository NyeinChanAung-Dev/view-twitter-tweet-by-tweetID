document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  e.stopPropagation();
  
  const tweetId = document.querySelector('#tweet_id').value.trim();
  
  if (!tweetId) return;
  
  document.querySelector('output').innerHTML = `
    <br /><br /><a href="https://twitter.com/anyuser/status/${tweetId}" target="_blank" rel="noopener noreferrer">https://twitter.com/${tweetId}</a>
  `;
})
