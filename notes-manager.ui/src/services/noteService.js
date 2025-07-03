import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const fetchNotes = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Meeting Notes", content: "Discuss project timelines." },
        { id: 2, title: "Shopping List", content: "Milk, Bread, Eggs." },
        { id: 3, title: "Workout Plan", content: "Run 5km, 30 push-ups." },
      ]);
    }, 500);
  });
};