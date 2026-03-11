import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, phone, visit_date, visit_time } = body;

  if (!name || !phone) {
    return NextResponse.json({ error: '이름과 전화번호는 필수입니다.' }, { status: 400 });
  }

  const { error } = await supabase.from('reservations').insert({
    name,
    phone,
    visit_date: visit_date || null,
    visit_time: visit_time || null,
  });

  if (error) {
    return NextResponse.json({ error: '저장 중 오류가 발생했습니다.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

export async function GET(req: NextRequest) {
  const password = req.headers.get('x-admin-password');

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: '인증 실패' }, { status: 401 });
  }

  const { data, error } = await supabase
    .from('reservations')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: '조회 중 오류가 발생했습니다.' }, { status: 500 });
  }

  return NextResponse.json(data);
}
