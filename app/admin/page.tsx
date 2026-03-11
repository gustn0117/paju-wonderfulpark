'use client';

import { useState, useEffect } from 'react';

interface Reservation {
  id: number;
  name: string;
  phone: string;
  visit_date: string | null;
  visit_time: string | null;
  created_at: string;
}

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    const res = await fetch('/api/reservations', {
      headers: { 'x-admin-password': password },
    });

    if (!res.ok) {
      setError('비밀번호가 틀렸습니다.');
      setLoading(false);
      return;
    }

    const data = await res.json();
    setReservations(data);
    setAuthenticated(true);
    setLoading(false);
  };

  const refresh = async () => {
    const res = await fetch('/api/reservations', {
      headers: { 'x-admin-password': password },
    });
    if (res.ok) {
      const data = await res.json();
      setReservations(data);
    }
  };

  useEffect(() => {
    if (authenticated) {
      const interval = setInterval(refresh, 30000);
      return () => clearInterval(interval);
    }
  }, [authenticated, password]);

  if (!authenticated) {
    return (
      <div className="admin-login">
        <div className="admin-login-card">
          <h1>관리자 로그인</h1>
          <p>방문예약 관리 페이지입니다.</p>
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
          />
          {error && <span className="admin-error">{error}</span>}
          <button onClick={handleLogin} disabled={loading}>
            {loading ? '확인 중...' : '로그인'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>방문예약 관리</h1>
        <div className="admin-actions">
          <span className="admin-count">총 {reservations.length}건</span>
          <button onClick={refresh}>새로고침</button>
          <button onClick={() => { setAuthenticated(false); setPassword(''); }}>로그아웃</button>
        </div>
      </div>
      {reservations.length === 0 ? (
        <div className="admin-empty">아직 예약이 없습니다.</div>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>No.</th>
                <th>이름</th>
                <th>전화번호</th>
                <th>방문 희망일</th>
                <th>방문 시간</th>
                <th>신청일시</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((r, i) => (
                <tr key={r.id}>
                  <td>{reservations.length - i}</td>
                  <td>{r.name}</td>
                  <td>{r.phone}</td>
                  <td>{r.visit_date || '-'}</td>
                  <td>{r.visit_time || '-'}</td>
                  <td>{new Date(r.created_at).toLocaleString('ko-KR')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
