import { PipelineStage } from "mongoose";
import {ObjectId } from 'mongodb'


export const articlePipelines = {
   getArticlesWithUsernameAndAvatar: () : PipelineStage[] => [
            {
                $sort: { createdAt: -1 },
            },
            {
                $limit: 10,
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'user',
                },
            },
            {
                $unwind: '$user', // Unwind the user array
            },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    subtitle: 1,
                    views: 1,
                    img: 1,
                    'user._id': 1,
                    'user.username': 1,
                    'user.avatar': 1, 
                    likes: 1,
                    comments: { $size: '$comments' },
                    createdAt: 1,
                },
            },
        ],
        getBookmarksArticlesByUserId: (userId: string) => [
            {
              $match: {
                _id:  new ObjectId(userId) 
              }
            },
            {
              $unwind: "$bookmarks" 
            },
            {
              $lookup: {
                from: "articles",
                localField: "bookmarks",
                foreignField: "_id",
                as: "article"
              }
            },
            {
              $unwind: "$article" 
            },
            {
              $lookup: {
                from: "users",
                localField: "article.userId",
                foreignField: "_id",
                as: "user"
              }
            },
            {
              $unwind: "$user" 
            },
            {
              $project: {
                _id: "$article._id",
                title: "$article.title",
                subtitle: "$article.subtitle",
                views: "$article.views",
                img: "$article.img",
                'user.username': "$user.username",
                'user.avatar': "$user.avatar",
                likes: "$article.likes",
                comments: { $size: "$article.comments" },
                createdAt: "$article.createdAt"
              }
            }
          ]
    }
