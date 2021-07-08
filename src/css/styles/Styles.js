export const Image = ({ className, children, id, src, alt, }) => (
    <img className={className} id={id} src={src}/>
);

export const Filter = ({ className, children, id, onClick }) => (
    <div id={id} className={className} onClick={onClick}>
        {children}
    </div>
);