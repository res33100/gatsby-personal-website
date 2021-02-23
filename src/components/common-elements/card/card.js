import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Card = ({ link, image, imageAltText, heading, timestamp, content }) => {
  return (
    <>
      <Link
        to={link}
        aria-label={heading}
        style={{
          textDecoration: "none",
          color: "var(--black)",
          display: "flex",
        }}
      >
        <article>
          <Img
            sizes={{ ...image, aspectRatio: 21 / 9 }}
            alt={imageAltText}
            style={{
              borderRadius: "6px 6px 0 0",
            }}
          />

          <div>
            <p className="timestamp">{timestamp}</p>

            <h3>{heading}</h3>

            <p>{content}</p>
          </div>
        </article>
      </Link>

      <style jsx>{`
        article {
          flex: 1 1 auto;
          border-radius: 6px;
          box-shadow: var(--medium-shadow);
          font-size: 1rem;
          color: var(--black);
          background: var(--white);
          transition: box-shadow 0.25s ease-in-out;
        }

        article:hover {
          box-shadow: unset;
          box-shadow: var(--large-shadow);
        }

        article:active {
          box-shadow: unset;
          box-shadow: var(--small-shadow);
        }

        div {
          padding: 25px;
        }

        div > * {
          margin: 0 0 15px 0;
        }

        h3 {
          color: var(--blue-600);
          font-size: 1rem;
          font-weight: 500;
        }

        .timestamp {
          color: var(--gray-600);
        }
      `}</style>
    </>
  )
}

export default Card
