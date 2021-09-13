const Templates = ({templates, setMeme}) => {
    return(
        <div className="templates">
            {templates.map((template)=> (
                <div className="template" key={template.id} onClick={() => {setMeme(template)}}>
                    <div className="img" style={{backgroundImage: `url(${template.url})`}}></div>
                </div>
            ))}
        </div>
    )
    
}

export default Templates;