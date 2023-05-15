import React from 'react';
import { Modal, Button, Image, Row, Col } from 'react-bootstrap';
import './MenuItemModal.css';

const MenuItemModal = ({ item, show, onHide }) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{item.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col xs={6} md={6}>
                        <Image src={item.image} alt={item.name} className="mb-3 modal-image" />
                    </Col>
                    <Col xs={6} md={6}>
                        <h4>{item.description}</h4>
                        <p>Ingredients: {item.ingredients}</p>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MenuItemModal;
