import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Note from './Note';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addNote = () => {
    if (title.trim() && content.trim()) {
      setNotes([...notes, { title, content }]);
      setTitle('');
      setContent('');
    }
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((note, i) => i !== index);
    setNotes(newNotes);
  };

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Container>
        <Row className="my-4">
          <Col>
            <h1>Google Keep Clone</h1>
          </Col>
          <Col className="text-right">
            <Form.Check 
              type="switch"
              id="dark-mode-switch"
              label="Dark Mode"
              checked={isDarkMode}
              onChange={toggleMode}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={addNote}>Add Note</Button>
            </Form>
          </Col>
        </Row>
        <Row className="my-4">
          {notes.map((note, index) => (
            <Col key={index} md={4} className="mb-4">
              <Note 
                title={note.title} 
                content={note.content} 
                onDelete={() => deleteNote(index)} 
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
