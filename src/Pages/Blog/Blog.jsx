import React from "react";
import useTitle from "../../useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="w-10/12 mx-auto mt-5">
      <h2 className="text-2xl text-center font-bold">Blog page</h2>
      <div className="card w-full">
        <div className="card-body">
          <div className="mb-4 bg-base-200 shadow-xl p-5 rounded-md">
            <h2 className="text-2xl font-semibold mb-4">
              Question.1 : Tell us the differences between uncontrolled and
              controlled components?
            </h2>
            <p>
              The parent components pass th. An uncontrolled component is a
              component that manages its own state acts as the child components
              polyps. The child component simply renders state and calls
              functions called by the parent component. Controlled props are
              useful when elements have specific controls over their behavior.
              An uncontrolled component is a component that manages its own
              state internally
            </p>
          </div>

          <div className="mb-4 bg-base-200 shadow-xl p-5 rounded-md">
            <h2 className="text-2xl font-semibold mb-4">
              Question.2 : How to validate React props using PropTypes?
            </h2>
            <p>
              Prop Types passed from prop-types can be used to validate props
              passed to an element. When a prop does not match its prop types, a
              warning will be logged to the console. Using prop types to
              validate props will catch bugs and keep the code safe.
            </p>
          </div>

          <div className="mb-4 bg-base-200 shadow-xl p-5 rounded-md">
            <h2 className="text-2xl font-semibold mb-4">
              Question.3 : Tell us the difference between nodejs and express
              js.?
            </h2>
            <p>
              node.js is used to run JavaScript code outside of a web browser.
              And express. js is a web application framework built on top of
              node.js and provides a set of API creation tools. node.js is a
              runtime environment, where express. js is a framework built on top
              of node.js. node.js provides low-level APIs for building network
              applications, while express.js provides a high-level set of APIs.
            </p>
          </div>

          <div className="mb-4 bg-base-200 shadow-xl p-5 rounded-md">
            <h2 className="text-2xl font-semibold mb-4">
              Question.4 : What is a custom hook, and why will you create a
              custom hook?
            </h2>
            <p>
              A custom hook is a function of React that makes it reusable using
              one or more built-in hooks. UseEffect hooks to retrieve data from
              the api, handling the loading state using useState and useEffect.
              These two hooks load data and return data. Custom hooks can be or
              have been used for a range of data fetching, caching,
              authentication, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
