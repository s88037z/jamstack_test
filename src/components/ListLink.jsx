function ListLink({ links,refreshLinks }) {




  const archiveLink = async (link) => {
    link.archived = !link.archived;
    try {
        await fetch('/.netlify/functions/updateLink', {
            method: 'PUT',
            body: JSON.stringify(link),
        });
        refreshLinks();
    } catch (error) {
        console.error('AHHH', error);
    }
};

const deleteLink = async (link) => {
    const id = link._id;
    try {
        await fetch('/.netlify/functions/deleteLink', {
            method: 'DELETE',
            body: JSON.stringify({ id }),
        });
        refreshLinks();
    } catch (error) {
        console.error('AHHH', error);
    }
};






  return (
    <div>
      <h2 className="my-4">Links</h2>
      {links &&
        links
        .filter((link) => !link.archived)
        .map((link) => {
          return (
            <div className="card" key={link._id}>
              <div className="card-header">{link.name}</div>
              <div className="card-body">
                <a href={link.url}>{link.url}</a>
                <p>{link.description}</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-warning mx-2" onClick={()=>archiveLink(link)}>Archive</button>
                <button className="btn btn-danger"  onClick={()=>deleteLink(link)}>Delete</button>

              </div>

            </div>
          );
        })}
        <h2 className="my-4">Archived</h2>
        {links &&
        links
        .filter((link) => link.archived)
        .map((link) => {
          return (
            <div className="card" key={link._id}>
              <div className="card-header">{link.name}</div>
              <div className="card-body">
                <a href={link.url}>{link.url}</a>
                <p>{link.description}</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-warning mx-2" onClick={()=>archiveLink(link)}>UnArchive</button>
                <button className="btn btn-danger" onClick={()=>deleteLink(link)}>Delete</button>

              </div>

            </div>
          );
        })}
    </div>
  );
}

export default ListLink;

