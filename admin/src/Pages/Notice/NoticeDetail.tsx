import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface NoticeDetailProps {
    id: number;
    title: string;
    content: string;
    createdAt: string;
}

const NoticeDetail: React.FC = () => {
    const {id} = useParams<{ id: string }>();
    const [notices, setNotices] = useState<NoticeDetailProps[]>([]);
    const navigate = useNavigate();

    const fetchNotices = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/notice/${id}`);
            console.log(res);
            const noticeList: NoticeDetailProps[] = res.data.data.noticeList;
            console.log(noticeList);

            setNotices(noticeList);
        } catch (error) {
            console.error("Error fetching notices:", error);
        }
    };

    useEffect(() => {
        fetchNotices();
    }, []);

    return(
        <div>
            <p></p>
        </div>
    )
};

export default NoticeDetail;