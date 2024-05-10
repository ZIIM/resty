import React from 'react'
import {fireEvent, render} from '@testing-library/react';
import Form from './index';

describe('Renders buttons', () => {
    test('renders all method selection buttons', () => {
        const { getByText } = render(<Form handleApiCall={() => {}} />);
        expect(getByText('GET')).toBeInTheDocument();
        expect(getByText('POST')).toBeInTheDocument();
        expect(getByText('PUT')).toBeInTheDocument();
        expect(getByText('DELETE')).toBeInTheDocument();
      });
    
    //   test('calls handleMethodSelect when a method selection button is clicked', () => {
    //     const handleApiCallMock = jest.fn();
    //     const { getByText } = render(<Form handleApiCall={handleApiCallMock} />);
    
    //     // Click on the POST method button
    //     fireEvent.click(getByText('POST'));
    
    //     // Assert that handleMethodSelect is called with 'POST' method
    //     expect(handleApiCallMock).toHaveBeenCalledWith({ method: 'POST', url: '' });
    //   });
    });