import {Col} from "react-bootstrap"
export const ProjectCard = ({tittle, description , imgUrl, linka, linkb}) => {
    return (
        <Col sm={6} md={4}>
        <div className="proj-imgbx" data-description={description}>
            <a href={linka} target="_blank" className="github-link"></a>
            <a href={linkb} target="_blank" className="vercel-link"></a>
            <img src={imgUrl} alt="img"/>
        </div>
        <div className="proj-txtx">
            <h4>{tittle}</h4>
            <span>{description}</span>
        </div>
        </Col>
    )
}