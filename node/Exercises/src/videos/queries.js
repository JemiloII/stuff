const run = require('./example')

run(function (knex) {

  return Promise.all([
    // queryA(),
    // queryB(),
    // queryC(),
    // queryD(),
    // queryE(),
    // queryF(),
    // queryG(),
    // queryH(),
    // queryI(),
    // queryJ(),
    // queryK(),
    queryL(),
  ])

  function queryA() {
    return knex('videos')
      .select(knex.raw('videos.*, users.name as owner_name'))
      .join('users', 'users.id', 'videos.owner_id')
      .where('videos.id', 20)
      .first()
      .then(function(video) {
        console.log(video);
        // video - { id: 20, owner_id: 4, title: 'Video 1', owner_name: 'User 4' }
      })
  }

  function queryB() {
    return knex('tags')
      .join('taggings', 'taggings.tag_id', 'tags.id')
      .where('taggings.video_id', 20)
      .then(function(tags) {
        console.log(tags);
        // tags - [ { id: 10, name: 'funny' }, { id: 11, name: 'lulz' }, { id: 12, name: 'catz' } ]
      });
  }

  function queryC() {
    return knex('comments')
      .select(knex.raw('comments.*, users.name as author_name'))
      .join('users', 'users.id', 'comments.author_id')
      .where('comments.video_id', 20)
      .then(function(comments) {
        console.log(comments);
        // [ { id: 2, video_id: 20, author_id: 1, text: 'secondz', author_name: 'User 1' }, etc...]
      })
  }

  function queryD() {
    return knex('videos')
      .select(knex.raw('videos.*, users.name as owner_name'))
      .join('users', 'users.id', 'videos.owner_id')
      .where('videos.id', 20)
      .first()
      .then(function(video) {

        return knex('tags')
          .join('taggings', 'taggings.tag_id', 'tags.id')
          .where('taggings.video_id', 20)
          .then(function(tags) {

            return knex('comments')
              .select(knex.raw('comments.*, users.name as author_name'))
              .join('users', 'users.id', 'comments.author_id')
              .where('comments.video_id', 20)
              .then(function(comments) {
                // video    - { id: 20, owner_id: 4, title: 'Video 1', owner_name: 'User 4' }
                // tags     - [ { id: 10, name: 'funny' }, { id: 11, name: 'lulz' }, { id: 12, name: 'catz' } ]
                // comments - [ { id: 2, video_id: 20, author_id: 1, text: 'secondz', author_name: 'User 1' }, etc...]
              })

          });

      })
  }

  function queryE() {
    const result = {}

    return knex('videos')
      .select(knex.raw('videos.*, users.name as owner_name'))
      .join('users', 'users.id', 'videos.owner_id')
      .where('videos.id', 20)
      .first()
      .then(function(video) { result.video = video })
      .then(function () {
        return knex('tags')
          .join('taggings', 'taggings.tag_id', 'tags.id')
          .where('taggings.video_id', 20)
          .then(function(tags) { result.tags = tags });
      })
      .then(function () {
        return knex('comments')
          .select(knex.raw('comments.*, users.name as author_name'))
          .join('users', 'users.id', 'comments.author_id')
          .where('comments.video_id', 20)
          .then(function(comments) { result.comments = comments })
      })
      .then(function () {
        // result is:
        //
        // {
        //   video: { id: 20, owner_id: 4, title: 'Video 1', owner_name: 'User 4' },
        //   tags: [ { id: 2, name: 'funny', tag_id: 10, video_id: 20 }, etc.. ],
        //   comments: [ { id: 3, video_id: 20, author_id: 1, text: 'secondz', author_name: 'User 1' }, etc...]
        // }
      })
  }

  function queryF() {
    return knex('videos')
      .select(knex.raw('videos.*, users.name as owner_name'))
      .join('users', 'users.id', 'videos.owner_id')
      .where('videos.id', 20)
      .first()
      .then(function (video) {
        return knex('tags')
          .join('taggings', 'taggings.tag_id', 'tags.id')
          .where('taggings.video_id', 20)
          .then(function(tags) {
            video.tags = tags
            return video
          });
      })
      .then(function (video) {
        return knex('comments')
          .select(knex.raw('comments.*, users.name as author_name'))
          .join('users', 'users.id', 'comments.author_id')
          .where('comments.video_id', 20)
          .then(function(comments) {
            video.comments = comments
            return video
          })
      })
      .then(function (video) {
        console.log('video', video);
        // video is:
        //
        // {
        //   id: 20,
        //   owner_id: 4,
        //   title: 'Video 1',
        //   owner_name: 'User 4',
        //   tags: [ { id: 2, name: 'funny', tag_id: 10, video_id: 20 }, etc.. ],
        //   comments: [ { id: 3, video_id: 20, author_id: 1, text: 'secondz', author_name: 'User 1' }, etc...]
        // }
      })
  }

  function queryG() {

    function getVideo(id) {
      return knex('videos')
        .select(knex.raw('videos.*, users.name as owner_name'))
        .join('users', 'users.id', 'videos.owner_id')
        .where('videos.id', 20)
        .first()
    }

    function addTagsToVideo(video) {
      return knex('tags')
        .join('taggings', 'taggings.tag_id', 'tags.id')
        .where('taggings.video_id', video.id)
        .then(function(tags) {
          video.tags = tags
          return video
        });
    }

    function addCommentsToVideo(video) {
      return knex('comments')
        .select(knex.raw('comments.*, users.name as author_name'))
        .join('users', 'users.id', 'comments.author_id')
        .where('comments.video_id', video.id)
        .then(function(comments) {
          video.comments = comments
          return video
        })
    }

    function getVideoWithTagsAndComments(videoId) {
      return getVideo(videoId)
        .then(addTagsToVideo)
        .then(addCommentsToVideo)
    }

    return getVideoWithTagsAndComments(20).then(function (video) {
      console.log('video with tags and comments', video);
      // video is:
      //
      // {
      //   id: 20,
      //   owner_id: 4,
      //   title: 'Video 1',
      //   owner_name: 'User 4',
      //   tags: [ { id: 2, name: 'funny', tag_id: 10, video_id: 20 }, etc.. ],
      //   comments: [ { id: 3, video_id: 20, author_id: 1, text: 'secondz', author_name: 'User 1' }, etc...]
      // }

    })
  }

  function queryH() {

    function getVideo(id) {
      return knex('videos')
        .select(knex.raw('videos.*, users.name as owner_name'))
        .join('users', 'users.id', 'videos.owner_id')
        .where('videos.id', 20)
        .first()
    }

    function getTagsForVideo(videoId) {
      return knex('tags')
        .join('taggings', 'taggings.tag_id', 'tags.id')
        .where('taggings.video_id', videoId)
    }

    function getCommentsForVideo(videoId) {
      return knex('comments')
        .select(knex.raw('comments.*, users.name as author_name'))
        .join('users', 'users.id', 'comments.author_id')
        .where('comments.video_id', videoId)
    }

    function getVideoWithTagsAndComments(videoId) {
      return Promise.all([
        getVideo(videoId),
        getTagsForVideo(videoId),
        getCommentsForVideo(videoId),
      ]).then(function (results) {
        let [video, tags, comments] = results
        video.tags = tags
        video.comments = comments
        return video
      })
    }

    return getVideoWithTagsAndComments(20).then(function (video) {
      console.log('video with tags and comments parallel', video);
      // video is:
      //
      // {
      //   id: 20,
      //   owner_id: 4,
      //   title: 'Video 1',
      //   owner_name: 'User 4',
      //   tags: [ { id: 2, name: 'funny', tag_id: 10, video_id: 20 }, etc.. ],
      //   comments: [ { id: 3, video_id: 20, author_id: 1, text: 'secondz', author_name: 'User 1' }, etc...]
      // }

    })
  }

  function queryI() {

    function getVideos() {
      return knex('videos')
        .select(knex.raw('videos.*, users.name as owner_name'))
        .join('users', 'users.id', 'videos.owner_id')
        .limit(10)
        .then(function (videos) {

          // for each video, find the tags
          let tagPromises = videos.map(function (video) {
            return knex('tags')
              .join('taggings', 'taggings.tag_id', 'tags.id')
              .where('taggings.video_id', video.id)
          })

          // for each video, find all comments
          let commentPromises = videos.map(function (video) {
            return knex('comments')
              .select(knex.raw('comments.*, users.name as author_name'))
              .join('users', 'users.id', 'comments.author_id')
              .where('comments.video_id', video.id)
          })

          return Promise.all(tagPromises).then(function (tags) {
            return Promise.all(commentPromises).then(function (comments) {
              return videos.map(function (video, i) {
                video.commentCount = comments[i].length
                video.tags = tags[i]
                return video
              })
            })
          })

        })
    }

    return getVideos().then(function (result) {
      console.log(result);
      return result
    })
  }

  function queryJ() {

    function getVideos() {
      return knex('videos')
        .select(knex.raw('videos.*, users.name as owner_name'))
        .join('users', 'users.id', 'videos.owner_id')
        .limit(10)
        .then(function (videos) {

          return knex('tags')
            .join('taggings', 'taggings.tag_id', 'tags.id')
            .whereIn('taggings.video_id', videos.map(video => video.id))
            .then(function (tags) {

              return knex('comments')
                .select('video_id')
                .count('id')
                .groupBy('video_id')
                .whereIn('comments.video_id', videos.map(video => video.id))
                .then(function (comments) {

                  return videos.map(function (video) {
                    let countRow = comments.find(function (commentCount) {
                      return commentCount.video_id === video.id
                    })
                    video.commentCount = countRow ? countRow.count : '0';

                    video.tags = tags.filter(tag => tag.video_id === video.id)
                    return video
                  })
                })
            })
        })
    }

    return getVideos().then(function (result) {
      console.log(result);
      return result
    })
  }

  function queryK() {

    function getVideos() {
      return knex('videos')
        .select(knex.raw('videos.*, users.name as owner_name'))
        .join('users', 'users.id', 'videos.owner_id')
        .limit(10)
        .then(function (videos) {

          return knex('tags')
            .join('taggings', 'taggings.tag_id', 'tags.id')
            .whereIn('taggings.video_id', videos.map(video => video.id))
            .then(function (tags) {

              return knex('comments')
                .select('video_id')
                .count('id')
                .groupBy('video_id')
                .whereIn('comments.video_id', videos.map(video => video.id))
                .then(function (comments) {

                  let indexedCounts = comments.reduce(function (result, row) {
                    result[row.video_id] = row
                    return result
                  }, {})

                  let groupedTags = tags.reduce(function (result, tag) {
                    result[tag.video_id] = result[tag.video_id] || []
                    result[tag.video_id].push(tag)
                    return result
                  }, {})

                  return videos.map(function (video) {
                    let countRow = indexedCounts[video.id]
                    video.commentCount = countRow ? countRow.count : '0';

                    video.tags = groupedTags[video.id]
                    return video
                  })
                })
                .catch(function (err) {
                  console.log(err);
                })
            })
        })
    }

    return getVideos().then(function (result) {
      console.log(result);
      return result
    })
  }

  function queryL() {

    // groups tags by video_id (pure function)
    function groupTags(tags) {
      return tags.reduce(function (result, tag) {
        result[tag.video_id] = result[tag.video_id] || []
        result[tag.video_id].push(tag)
        return result
      }, {})
    }

    // indexes comment counts by video_id (pure function)
    function indexCommentCounts(comments) {
      return comments.reduce(function (result, row) {
        result[row.video_id] = row
        return result
      }, {})
    }

    // efficiently adds commentCount and tags properties to each video
    function populateVideos(videos, tags, comments) {
      let indexedCommentCounts = indexCommentCounts(comments)
      let groupedTags = groupTags(tags)

      return videos.map(function (video) {
        let countRow = indexedCommentCounts[video.id]
        video.commentCount = countRow ? countRow.count : '0';

        video.tags = groupedTags[video.id] || []
        return video
      })
    }

    // finds all tags for the videos and groups them by video_id
    function getTagsForVideos(videos) {
      return knex('tags')
        .join('taggings', 'taggings.tag_id', 'tags.id')
        .whereIn('taggings.video_id', videos.map(video => video.id))
    }

    // finds all tags for the videos and indexes them by video_id
    function getCommentsForVideos(videos) {
      return knex('comments')
        .select('video_id')
        .count('id')
        .groupBy('video_id')
        .whereIn('comments.video_id', videos.map(video => video.id))
    }

    // find videos
    function getVideos() {
      return knex('videos')
        .select(knex.raw('videos.*, users.name as owner_name'))
        .join('users', 'users.id', 'videos.owner_id')
        .limit(10)
    }

    // finds videos
    // then in parallel finds tags and comments
    // then composes the final object
    function getVideosWithTagsAndComments() {
      return getVideos()
        .then(function (videos) {
          return Promise.all([
            getTagsForVideos(videos),
            getCommentsForVideos(videos)
          ]).then(results  => populateVideos(videos, ...results) )
        })
    }

    return getVideosWithTagsAndComments().then(function (result) {
      console.log(result);
      return result
    })
  }

})
