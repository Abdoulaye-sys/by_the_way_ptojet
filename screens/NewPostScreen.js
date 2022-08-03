// Page de publication des Stories;
import  {SafeAreaView}  from 'react-native'
import React from 'react'
import AddNewPost from '../components/newPost/AddNewPost.js'

const NewPostScreen = () => {
  return (
    <SafeAreaView style= {{ backgroundColor: 'black'  , flex: 1 }}>
      <AddNewPost />
    </SafeAreaView>
  )
}

export default NewPostScreen