import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, features } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Insert into Supabase (use landing_waitlist table)
    const { data, error } = await supabase
      .from('landing_waitlist')
      .insert([
        {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          features: features || [],
          created_at: new Date().toISOString()
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      
      // Check if it's a duplicate email error
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'This email is already on the waitlist' },
          { status: 409 }
        )
      }
      
      throw error
    }

    // Success response
    return NextResponse.json({ 
      success: true, 
      message: 'Successfully joined the waitlist',
      data: data 
    })

  } catch (error) {
    console.error('Error processing submission:', error)
    return NextResponse.json(
      { error: 'Failed to process your submission. Please try again.' },
      { status: 500 }
    )
  }
}
