import React from 'react';
import Typography from '@mui/material/Typography';


interface PageLayoutProps {
    title: string;
    detail: string;
    date: string;
    children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, detail, date, children }) => {
    return (
        <div>
            <Typography variant="h2" component="h2" gutterBottom>
                {title}
            </Typography>
            <Typography variant="h4" component="h4" gutterBottom>
                {detail}
            </Typography>
            <Typography variant="h4" component="h4" gutterBottom>
                {date}
            </Typography>
            <Typography variant="body1" component="div">
                {children}
            </Typography>
        </div>
    );
};

export default PageLayout;
