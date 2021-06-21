import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Profile () {
  const [profile, setProfile] = useState({})

  useEffect(async () => {
    const liff = (await import('@line/liff')).default
    await liff.ready
    const profile = await liff.getProfile()
    setProfile(profile)
  }, [profile.userId])

  return (
    <div>
      {profile.pictureUrl && (
        <Image
          src={profile.pictureUrl}
          alr={profile.displayName}
          width={500}
          height={500}
        />
      )}
    </div>
  )
}
