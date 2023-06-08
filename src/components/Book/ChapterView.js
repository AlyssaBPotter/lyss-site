import React, { useState, useEffect } from 'react'

import React from 'react'

const ChapterView = () => {
  const [chapterContent, setChapterContent] = useState('');

  useEffect(() => {
    // Fetch the chapter content when the component mounts
    fetchChapterContent();
  }, []);

  const fetchChapterContent = async () => {
    try {
      const response = await fetch('src/data/chapters/Best-Thing-Ch1.txt');
      const content = await response.text();
      setChapterContent(content);
    } catch (error) {
      console.error('Error fetching chapter content:', error);
    }
  };

  return (
    <div>
      <h1>Chapter 1</h1>
      <p>{chapterContent}</p>
      <div>
        {/* Add navigation buttons here */}
      </div>
    </div>
  );
};


export default ChapterView