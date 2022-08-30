import React from "react";
import Edmojo from "pages/Edmojo";
import Procampus from "pages/Procampus";
import UVAcardpage from "pages/UVAcardpage";
import Aboutus from "pages/Aboutus";
import Homepagelatestiteration from "pages/Homepagelatestiteration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/homepagelatestiteration"
          element={<Homepagelatestiteration />}
        />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/uvacardpage" element={<UVAcardpage />} />
        <Route path="/procampus" element={<Procampus />} />
        <Route path="/edmojo" element={<Edmojo />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
