import React from 'react';
import './App.css';
import {QueryClient, QueryClientProvider} from "react-query";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProjectList from "./Components/ProjectList";
import NewProject from "./Components/Wizard/NewProject"


function App() {

    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <div className="AppStyle">
                <header className="App-header">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<ProjectList/>}/>
                            <Route path="/addProject" element={<NewProject/>}/>
                        </Routes>
                    </BrowserRouter>
                </header>
            </div>
        </QueryClientProvider>
    );
}

export default App;
