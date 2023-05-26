import React from 'react';

function Article({ post = {} }) {
  const { title, date = "January 1, 1970", preview } = post;
  return (
    <article>
      <h3>"Components 101"</h3>
      <small>"December 15, 2020"</small>
      <p>"January 1, 1970"</p>
      <p>Setting up the building blocks of your site</p>
    </article>
  );
}

export default Article;