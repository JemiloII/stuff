require('./example')(function (knex) {

  knex('comments').then(function (comments) {
    console.log(comments);
  })

  const sql = `
      select
        videos.id,
        videos.title,
        videos.owner_id,
        users.name as owner_name,
        tags.id as tag_id,
        tags.name as tag_name,
        comments.id as comment_id,
        author_id,
        text,
        authors.name as author_name
      from videos
      inner join users on videos.owner_id = users.id
      left join taggings on taggings.video_id = videos.id
      inner join tags on taggings.tag_id = tags.id
      left join comments on comments.video_id = videos.id
      inner join users authors on comments.author_id = authors.id
      where videos.id = 20
  `.replace('\n', ' ')

  require('./psql')('node-curriculum-videos', sql)
})
