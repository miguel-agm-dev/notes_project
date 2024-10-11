import React,{useState,useEffect} from "react";
import Card from "./Card.jsx";

export function CardList() {

    
    return (
        <>
            <h1 className="text-center m-20 ">
                <span className="font-bold text-7xl bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent
                ">NOTAS</span>
            </h1>
        
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card title="Nota 1" body="Cuerpo de nota 1"/>
                <Card title="Nota 2" body="Cuerpo de nota 2"/>
                <Card title="Nota 3" body="Cuerpo de nota 3"/>
                <Card title="Nota 4" body="Cuerpo de nota 4"/>
            </ul>
        </>
        
    );
}

