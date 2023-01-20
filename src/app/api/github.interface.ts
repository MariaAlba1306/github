export interface SearchProfileDTO {
 login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface SearchProfile {
  login: string;
  location: string;
  email: string;
  avatar_url: string;
  blog: string;
  created_at: string;
  followers: number;
  public_gists: number;
  following: number;
  public_repos: number;
}

export interface SearchRepoDTO{

allow_forking: boolean,
archive_url: string,
archived: boolean,
assignees_url: string,
blobs_url: string,
branches_url:  string,
clone_url: string,
collaborators_url: string,
comments_url: string,
commits_url: string,
compare_url: string,
contents_url: string,
contributors_url: string,
created_at: string,
default_branch: string,
deployments_url: string,
description: string,
disabled: boolean,
downloads_url: string,
events_url:string,
fork: boolean,
forks: number,
forks_count: number,
forks_url: string,
full_name
: string,
git_commits_url: string,
git_refs_url: string,
git_tags_url:  string,
git_url: string,
has_discussions: boolean,
has_downloads: boolean,
has_issues: boolean,
has_pages: boolean,
has_projects: boolean,
has_wiki: boolean,
homepage: string,
hooks_url: string,
html_url: string,
id: number,
is_template:true,
issue_comment_url: string,
issue_events_url: string,
issues_url : string,
keys_url : string,
labels_url: string,
language: string,
languages_url: string,
license: string,
merges_url: string,
milestones_url: string,
mirror_url: string,
name: string,
node_id: string,
notifications_url: string,
open_issues:number,
open_issues_count: number,
owner: 
{login: string, id: number, node_id: string, avatar_url: string, gravatar_id: string},
private
: 
boolean,
pulls_url:string,
pushed_at :string,
releases_url:string,
size
: 
number,
ssh_url
: 
string,stargazers_count
: 
number,
stargazers_url
: 
string,statuses_url
: 
string,subscribers_url
: 
string,subscription_url
: 
string,svn_url
: 
string,tags_url
: 
string,teams_url
: 
string,topics
: 
[],
trees_url
: 
string,updated_at
: 
string,url
: 
string,visibility
: 
string,watchers
: 
number,
watchers_count
: 
number,
web_commit_signoff_required
: 
boolean
length: number,
}
export interface SearchRepo {
  name: string;
  description: string;
  forks: number;
  watchers: number;
  html_url: string;
}
