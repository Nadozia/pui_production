import Card from '../components/card.js';
import './blog.css';



function Blog() {

  return (
    <div>
      {/* <Card className="web_server" data={'Web Server'} target={'webServer'}/> */}
      <Card className="SSH Basic Usage" data={'SSH Basic Usage'} target={'SSH'}/>
      <Card className="ftp_server" data={'FTP Server'}/>
      <Card className="database_server" data={'DataBase'} target={'DataBase'}/>
    </div>
    
  )
  };

export default Blog;