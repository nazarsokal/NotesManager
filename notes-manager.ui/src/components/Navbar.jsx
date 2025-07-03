import React, { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { setIsModalOpen } = useContext(NotesContext);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-green-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Notes Manager</h1>
        <div className="space-x-4 flex items-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-green-700 px-4 py-2 rounded-md hover:bg-green-100 transition"
          >
            {t('navbar.createNote')}
          </button>
          <div className="relative inline-block">
            <select
              value={i18n.language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="appearance-none bg-white text-green-700 px-4 py-2 rounded-md hover:bg-green-100 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 pr-8"
            >
              <option value="en">{t('language.switchToEnglish')}</option>
              <option value="es">{t('language.switchToSpanish')}</option>
              <option value="uk">{t('language.switchToUkrainian')}</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg className="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;