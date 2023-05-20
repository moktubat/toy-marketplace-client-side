import React from "react";
import useTitle from "../../../hooks/useTitel";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="grid  place-items-center pb-4">
      <div className="collapse grid  place-items-center w-3/5 rounded">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-[#7A3E3E] text-primary-content peer-checked:bg-[#482121] peer-checked:text-secondary-content">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </div>
        <div className="collapse-content bg-[#482121] text-primary-content peer-checked:bg-[#7A3E3E] peer-checked:text-secondary-content">
          <p className="pt-2">
            <strong>Access tokens</strong> are used to make authenticated
            requests to a resource server and they are also are short-lived
            tokens.
            <br />
            <p>
              The access token is a piece of code used for authenticating the
              client application to access specific resources on the resource
              owner’s behalf. The access token represents the client’s
              authorization to access a specific resource.
            </p>
            <strong>Refresh tokens</strong> are stored by the client application
            and are not exposed to the user and they are also are long-lived
            tokens.
            <p>
              A refresh token just helps you re-validate a user without them
              having to re-enter their login credentials multiple times. The
              access token is re-issued, provided the refresh token is a valid
              one requesting permission to access confidential resources.
            </p>
          </p>
        </div>
      </div>
      <div className="collapse grid  place-items-center w-3/5 rounded mt-4">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-[#482121] text-primary-content peer-checked:bg-[#7A3E3E] peer-checked:text-secondary-content">
          Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content bg-[#7A3E3E] text-primary-content peer-checked:bg-[#482121] peer-checked:text-secondary-content">
          <p className="pt-2">
            01. SQL databases are relational, and NoSQL databases are
            non-relational. <br />
            02. SQL databases are vertically scalable, and NoSQL databases are
            horizontally scalable. <br />
            03. SQL databases are table-based, and NoSQL databases are document,
            graph based.
            <br />
            04. SQL databases use structured query language (SQL) and have a
            predefined schema. NoSQL databases have dynamic schemas for
            unstructured data.
            <br />
            05. SQL databases are better for multi-row transactions, and NoSQL
            is better for unstructured data like JSON.
          </p>
        </div>
      </div>
      <div className="collapse grid  place-items-center w-3/5 rounded mt-4">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-[#7A3E3E] text-primary-content peer-checked:bg-[#482121] peer-checked:text-secondary-content">
          What is express js? What is Nest JS?
        </div>
        <div className="collapse-content bg-[#482121] text-primary-content peer-checked:bg-[#7A3E3E] peer-checked:text-secondary-content">
          <p className="pt-2">
            <strong>Express</strong> is a minimal and flexible Node.js web
            application framework that provides a robust set of features for web
            and mobile applications.
          </p>
          <p>
            <strong>Nest. js</strong> is a server-side Node. js framework that's
            great for building highly testable and maintainable backend
            applications.
          </p>
        </div>
      </div>
      <div className="collapse grid  place-items-center w-3/5 rounded mt-4">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-[#482121] text-primary-content peer-checked:bg-[#7A3E3E] peer-checked:text-secondary-content">
          What is MongoDB aggregate and how does it work?
        </div>
        <div className="collapse-content bg-[#7A3E3E] text-primary-content peer-checked:bg-[#482121] peer-checked:text-secondary-content">
          <p className="pt-2">
            <strong>MongoDB aggregates</strong> make it easier to query data
            from any collection. It involves things like matching, getting data
            from other collections, selecting fields, and much more.
          </p>
          <p className="pt-2">
            Aggregation process in MongoDB is modeled on the concept of data
            processing pipelines. Multiple documents enter the pipeline and then
            these documents are being transformed into aggregated results. The
            pipeline method provides efficient data aggregation using other
            operations present in MongoDB. It can also operate on a sharded
            collection.
          </p>
          <p className="pt-2">These are 7 stages of aggregation of Pipeline in MongoDB:</p>
          01. <code>$project</code> <br />
          02. <code>$match</code> <br />
          03. <code>$group</code> <br />
          04. <code>$sort</code> <br />
          05. <code>$skip & $limit</code> <br />
          06. <code>$first & $last</code> <br />
          07. <code>$unwind</code>
        </div>
      </div>
    </div>
  );
};

export default Blog;
