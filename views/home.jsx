const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>Project-REST-Rant</h1>
        <div>
          <img
            src="/images/outside.jpg"
            className="bg"
            alt="Outside Restaurants"
          />
        </div>
        <div>
          Photo by{" "}
          <a href="https://unsplash.com/@eugenezhyvchik?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Eugene Zhyvchik
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/vad__5nCLJ8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </div>
        <br></br>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
