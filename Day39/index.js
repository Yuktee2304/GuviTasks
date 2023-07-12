const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Endpoint to create a text file
app.post('/create_text_file', (req, res) => {
  const folderPath = 'C:/GuviTasks/Day39/createFiles'; 

  // Generate the current timestamp
  const currentTimestamp = new Date().toISOString();

  // Generate the filename with current date-time
  const filename = `${new Date().toISOString().replace(/:/g, '-')}.txt`;

  // Create the file in the specified folder
  const filePath = path.join(folderPath, filename);
  fs.writeFile(filePath, currentTimestamp, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to create text file.' });
    }
    return res.status(200).json({ message: 'Text file created successfully.' });
  });
});


//Endpoint to retrieve all text files
app.get('/get_text_files', (req, res) => {
    const folderPath = 'C:/GuviTasks/Day39/createFiles'; // Replace with the actual folder path
  
    // Get all files in the folder
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to retrieve text files.' });
      }
  
      // Filter text files
      const textFiles = files.filter((file) => file.endsWith('.txt'));
  
      return res.status(200).json(textFiles);
    });
  });


app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
