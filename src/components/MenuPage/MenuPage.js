import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import './MenuPage.css';
import { menuItems } from '../../utils/constants';
import MenuItemModal from '../MenuItemModal/MenuItemModal';

const MenuPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setFilteredItems(menuItems);
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    const filteredItems = menuItems.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredItems(filteredItems);
  };

  const toggleItemModal = (item) => {
    setSelectedItem(item);
    setShowModal(!showModal);
  };

  return (
    <>
      <Form inline className="my-3 d-flex justify-content-center">
        <FormControl
          type="text"
          placeholder="Type to find your beverage"
          className="mr-sm-2"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onKeyUp={handleKeyUp}
          style={{ maxWidth: "50%" }}
        />
        <Button variant="outline-dark" className='ms-3' onClick={handleSearch}>Search</Button>
      </Form>

      <Row xs={1} sm={2} md={3} lg={3} className="g-4 m-4">
        {filteredItems.map(item => (
          <Col key={item.id} >
            <Card onClick={() => toggleItemModal(item)}>
              <Card.Img variant="top" src={item.image} className="img-fluid w-100 menu-card-img" />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {filteredItems.length === 0 && (
        <p className="text-center mt-3">No items found</p>
      )}

      {selectedItem && (
        <MenuItemModal
          show={showModal}
          onHide={() => toggleItemModal(null)}
          item={selectedItem}
        />
      )}
    </>
  );
}

export default MenuPage;
