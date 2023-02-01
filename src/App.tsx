import React from 'react';
import './App.css';


function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src='https://www.adobe.com/es/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium'/>
            </header>
            <nav className="nav">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className="content">
                <div><img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
                </div>
                <div>
                    ava+discriptiom
                </div>
                <div>
                    My posts
                    <div>New post</div>
                    <div>
                        <div>post1</div>
                        <div>post2</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

