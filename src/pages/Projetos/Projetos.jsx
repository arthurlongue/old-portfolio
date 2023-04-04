import Scroll from "../../Scroll"
import "./Projetos.sass"
import Modal from "../../components/Modal/Modal"
import { useState } from "react"

export default function Habilidades() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalEvent, setModalEvent] = useState()

  const toggle = (event) => {
    window.location = "#projetos"
    setModalOpen(!modalOpen)
    setModalEvent(event)

    if (modalOpen) {
      document.body.style.overflow = "unset"
    } else {
      document.body.style.overflow = "hidden"
    }
  }

  const ProjectCard = (props) => {
    return (
      <div ref={Scroll()} className={`grid-card animate ${props.class}`}>
        <img
          onClick={(event) => {
            toggle(event)
          }}
          className="gitHub-screenshot"
          src={props.src}
          alt={props.alt}
        />
        <h2>{props.tittle}</h2>
        <p>{props.description}</p>
        <div className="grid-card-wrapper">
          <a href={props.deploy} target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-globe"></i>
          </a>
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    )
  }

  return (
    <div ref={Scroll()} id="projetos" className="animate">
      <h1>Meus Projetos</h1>
      <div ref={Scroll()} className="projects-grid ">
        <ProjectCard
          class="from-left"
          src="/assets/ssCreditCard.jpg"
          alt="Screenshot 1"
          tittle="Interactive Credit Card"
          description="Update the details on the card as the user fills in the fields, validate the form when submitted. Display completed state."
          deploy="https://arthurlongue.github.io/interactive-card-details-form-main/"
          github="https://github.com/arthurlongue/interactive-card-details-form-main"
        />
        <ProjectCard
          class="from-bottom"
          src="/assets/ssNotifications.jpg"
          alt="Screenshot 2"
          tittle="Notifications Page"
          description="Distinguish between 'unread' and 'read' notifications. Select 'Mark all as read' to toggle the visual state of the unread notifications and set the number of unread messages to zero."
          deploy="https://arthurlongue.github.io/notifications-page-main/"
          github="https://github.com/arthurlongue/notifications-page-main"
        />
        <ProjectCard
          class="from-right"
          src="/assets/ssFAQ.jpg"
          alt="Screenshot 3"
          tittle="FAQ Accordion Card"
          description="Hide/Show the answer to a question when the question is clicked. Highlights the question and turns the arrow to show open question.  "
          deploy="https://arthurlongue.github.io/faq-accordion-card-main/"
          github="https://github.com/arthurlongue/faq-accordion-card-main"
        />
        <ProjectCard
          class="from-left"
          src="/assets/ssExpensesChart.jpg"
          alt="Screenshot 4"
          tittle="Expenses Chart Component"
          description="View the bar chart and hover over the individual bars to see the correct amounts for each day."
          deploy="https://arthurlongue.github.io/expenses-chart-component-main/"
          github="https://github.com/arthurlongue/expenses-chart-component-main"
          target="_blank"
          rel="noopener noreferrer"
        />
        <ProjectCard
          class="from-bottom"
          src="/assets/ssArticlePreview.jpg"
          alt="Screenshot 5"
          tittle="Article Preview Component"
          description="See the social media share links while hovering."
          deploy="https://arthurlongue.github.io/article-preview-component-master/"
          github="https://github.com/arthurlongue/article-preview-component-master"
        />
        <ProjectCard
          class="from-right"
          src="/assets/ssSignUp.jpg"
          alt="Screenshot 6"
          tittle="Sign Up Form"
          description="Recieve an error message when the form is submitted with any errors."
          deploy="https://arthurlongue.github.io/intro-component-with-signup-form-master/"
          github="https://github.com/arthurlongue/intro-component-with-signup-form-master"
        />
      </div>
      {modalOpen && <Modal setOpenModal={toggle} event={modalEvent} />}
    </div>
  )
}
