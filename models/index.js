const User = require('./User');
const TechBlog = require('./TechBlog');

User.hasMany(TechBlog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

TechBlog.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User,TechBlog};
