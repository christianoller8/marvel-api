#!/bin/bash

if [[ $VERCEL_GIT_COMMIT_REF == "master" ]] ; then
  echo "This is our master branch"
  npm run build:production
else
  echo "This is not our master branch"
  npm run build:development
fi
