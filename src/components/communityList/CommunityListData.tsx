import { CommunityType } from '@/types/community/type'
import { onDateHandler } from '@/util/util'
import Link from 'next/link'
import React from 'react'

const CommunityListData = ({ item }: { item: CommunityType }) => {
  return (
    <Link
      href={`/community/${item.boardId}`}
      className='block overflow-hidden text-ellipsis whitespace-nowrap'
    >
      <div key={item.boardId} className='flex items-center'>
        <img src={item.userInfo.userImage} alt='' className='w-28' />
        <img src={item.musicInfo.thumbnail} alt='thumbnail' className='w-28' />
        <div className='flex flex-col gap-2'>
          <div>{item.boardTitle}</div>
          <div className='flex gap-2'>
            <div>{item.userInfo.nickname}</div>
            <div>{onDateHandler(item!.date)}</div>
            <div>좋아요 {item?.likeList.length}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CommunityListData
