// Results.js
import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

const labResultsData = [
  { id: 1, testName: 'Blood Pressure', result: '120/80 mmHg', date: '2023-05-15' },
  { id: 2, testName: 'Cholesterol', result: '180 mg/dL', date: '2023-05-15' },
  { id: 3, testName: 'Blood Sugar', result: '100 mg/dL', date: '2023-06-02' },
  { id: 4, testName: 'Complete Blood Count', result: 'Within Normal Range', date: '2023-07-10' },
  { id: 5, testName: 'Thyroid Function', result: 'Normal', date: '2023-07-10' },
  // Add more lab results as needed
];

const groupResultsByDate = (results) => {
  const groupedResults = {};
  results.forEach((result) => {
    if (!groupedResults[result.date]) {
      groupedResults[result.date] = [];
    }
    groupedResults[result.date].push(result);
  });
  return groupedResults;
};

const Results = () => {
  const groupedResults = groupResultsByDate(labResultsData);

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '60vh' }}>
      <Typography variant="h3" gutterBottom>
        Lab Reports
      </Typography>
      <Grid container spacing={3}>
        {Object.entries(groupedResults).map(([date, results]) => (
          <Grid item xs={12} md={6} lg={4} key={date}>
            <Card sx={{ height: '100%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Report on {date}
                </Typography>
                {results.map((result) => (
                  <Card key={result.id} sx={{ marginBottom: '10px', backgroundColor: '#fff' }}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {result.testName}
                      </Typography>
                      <Typography color="text.secondary">
                        Result: {result.result}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Results;
