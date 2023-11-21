import Card from '../components/card.js';
import './blog.css';



function Blog() {

  return (
    <div>
      {/* <Card className="web_server" data={'Web Server'} target={'webServer'}/> */}
      <Card className="ftp_server" data={'FTP Server'}/>
      <Card className="database_server" data={'DataBase'} target={'DataBase'} path={'./pages/blogs/1_Create a virtual machine.md'}/>
    </div>
    
  )
  };

export default Blog;