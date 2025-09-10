import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useBusinessData } from '@/hooks/useBusinessData';

const mockBillRecord = {
  billNumber: '11',
  customer: 'NANGANALLUR Grains & Grocery Shop',
  date: '2025-09-12',
  amount: 30000.0,
  transactionType: 'Debit',
  remarks: 'none',
  items: [
    {
      id: 1,
      name: 'સિવપ્પુ અંતિસ અવિરિ... 60.00',
      quantity: 500.0,
      price: 30000.0,
      remarks: ''
    },
    {
      id: 2,
      name: 'પાંરિડ પાડિયા (45... 40.00',
      quantity: 40.0,
      price: 1500.0,
      remarks: ''
    }
  ]
};

export const DeleteBillRecord: React.FC = () => {
  const [selectedBillNumber, setSelectedBillNumber] = useState('11');
  const [billRecord, setBillRecord] = useState(mockBillRecord);

  const selectBillNumber = () => {
    // Load bill record based on selected bill number
    if (selectedBillNumber === '11') {
      setBillRecord(mockBillRecord);
    }
  };

  const deleteBill = () => {
    if (window.confirm(`Are you sure you want to delete bill ${billRecord.billNumber}?`)) {
      alert(`Bill ${billRecord.billNumber} has been deleted successfully!`);
      // Reset the form after deletion
      setBillRecord({
        ...mockBillRecord,
        billNumber: '',
        customer: '',
        items: []
      });
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Delete Bill Record</h2>
      
      {/* Bill Selection */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div>
              <Label htmlFor="bill-number">Select Bill Number:</Label>
              <Select value={selectedBillNumber} onValueChange={setSelectedBillNumber}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="11">11</SelectItem>
                  <SelectItem value="12">12</SelectItem>
                  <SelectItem value="13">13</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={selectBillNumber}>Load Bill</Button>
          </div>
        </CardContent>
      </Card>

      {billRecord.billNumber && (
        <>
          {/* Bill Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Bill Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Bill Number:</Label>
                  <div className="font-medium">{billRecord.billNumber}</div>
                </div>
                <div>
                  <Label>Customer:</Label>
                  <div className="font-medium">{billRecord.customer}</div>
                </div>
                <div>
                  <Label>Date:</Label>
                  <div className="font-medium">{billRecord.date}</div>
                </div>
                <div>
                  <Label>Amount:</Label>
                  <div className="font-medium">₹{billRecord.amount.toLocaleString()}</div>
                </div>
                <div>
                  <Label>Transaction Type:</Label>
                  <div className="font-medium">{billRecord.transactionType}</div>
                </div>
                <div>
                  <Label>Remarks:</Label>
                  <div className="font-medium">{billRecord.remarks}</div>
                </div>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-3xl font-bold">₹{billRecord.amount.toLocaleString()}</p>
                  <p className="text-muted-foreground">Total Amount</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Items Table */}
          <Card>
            <CardHeader>
              <CardTitle>Bill Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="data-table w-full">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Item Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Total</th>
                      <th>Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {billRecord.items.map((item, index) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.quantity.toFixed(2)}</td>
                        <td>₹{item.price.toFixed(2)}</td>
                        <td>₹{item.price.toFixed(2)}</td>
                        <td>{item.remarks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Delete Button */}
          <div className="text-center">
            <Button 
              variant="destructive" 
              onClick={deleteBill}
              className="px-8 py-3"
              size="lg"
            >
              Delete Bill
            </Button>
          </div>
        </>
      )}
    </div>
  );
};